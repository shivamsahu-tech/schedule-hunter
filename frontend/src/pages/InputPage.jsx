import React, { useState } from 'react';
import { User, Sparkles, FileText, Upload, Brain, Zap, Type, File, CheckCircle } from 'lucide-react';
import * as pdfjsLib from "pdfjs-dist";
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function IntelliNotes() {
  const [inputType, setInputType] = useState('text');
  const [noteText, setNoteText] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);



  const generateDocument = async () => {
    setIsProcessing(true);
    console.log("Generating document with input type:", inputType);
    try {
      let endpoint = "http://127.0.0.1:8000";
      let body;

      if (inputType === "pdf") {
        if (!pdfFile) {
          alert("Please select a PDF file before submitting.");
          setIsProcessing(false);
          return;
        }

        endpoint += "/generate-doc-from-pdf";

        body = new FormData();
        body.append("file", pdfFile);
        body.append("prompt", prompt);
        body.append("inputType", inputType);
      } else if (inputType === "text") {
        if (!noteText.trim()) {
          alert("Please enter some text.");
          setIsProcessing(false);
          return;
        }

        endpoint += "/generate-doc-from-text";

        // ✅ Send JSON if it's just text
        body = JSON.stringify({
          text: noteText,
          prompt: prompt,
          inputType: inputType,
        });
      } 
      console.log("Request Body:", body);

      const response = await fetch(endpoint, {
        method: "POST",
        headers:
          inputType === "pdf"
            ? undefined // Let browser set correct multipart/form-data headers
            : { "Content-Type": "application/json" },
        body: body,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Generated Document Data:", data);
    } catch (error) {
      console.error("Error generating document:", error);
      alert("Error generating document. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGenerate = () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt.");
      return;
    }
    generateDocument();
  };




  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
      extractText(file); // ✅ pass file directly
    }
  };

  // Reset to main page
  const resetToMain = () => {
    setShowResult(false);
    setResult(null);
    setNoteText('');
    setExtractedText('');
    setPdfFile(null);
    setPrompt('');
    setInputType('text');
  };

  // Result Page Component
  // if (showResult && result) {
  //   return (
  //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
  //       {/* Navigation */}
  //       <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
  //         <div className="flex items-center justify-between max-w-7xl mx-auto">
  //           <div className="flex items-center space-x-3">
  //             <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
  //               <Brain className="h-6 w-6 text-white" />
  //             </div>
  //             <h1 className="text-2xl font-bold text-gray-800">
  //               IntelliNotes
  //             </h1>
  //           </div>
  //           <button
  //             onClick={resetToMain}
  //             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
  //           >
  //             New Document
  //           </button>
  //         </div>
  //       </nav>

  //       {/* Result Content */}
  //       <div className="max-w-6xl mx-auto px-6 py-8">
  //         <div className="text-center mb-8">
  //           <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
  //             <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
  //             Document Generated Successfully
  //           </h2>
  //           <p className="text-gray-600">Your AI-powered summary is ready!</p>
  //         </div>

  //         <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 lg:p-12 shadow-lg">
  //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  //             {/* Original Text */}
  //             <div>
  //               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
  //                 <FileText className="h-5 w-5 mr-2 text-blue-600" />
  //                 Original {inputType === 'pdf' ? 'PDF' : 'Text'} Content
  //               </h3>
  //               <div className="bg-white border border-gray-300 rounded-xl p-4 h-96 overflow-y-auto">
  //                 <p className="text-gray-700 whitespace-pre-wrap text-sm">
  //                   {inputType === 'text' ? noteText : extractedText}
  //                 </p>
  //               </div>
  //             </div>

  //             {/* Generated Summary */}
  //             <div>
  //               <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
  //                 <Brain className="h-5 w-5 mr-2 text-blue-600" />
  //                 AI Generated Summary
  //               </h3>
  //               <div className="bg-white border border-gray-300 rounded-xl p-4 h-96 overflow-y-auto">
  //                 <p className="text-gray-700 whitespace-pre-wrap">
  //                   {result.summary || result.generated_text || 'Summary generated successfully!'}
  //                 </p>
  //               </div>
  //             </div>
  //           </div>

  //           {/* Action Buttons */}
  //           <div className="flex flex-col sm:flex-row gap-4 mt-8">
  //             <button
  //               onClick={() => navigator.clipboard.writeText(result.summary || result.generated_text)}
  //               className="flex-1 py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300"
  //             >
  //               Copy Summary
  //             </button>
  //             <button
  //               onClick={() => {
  //                 const blob = new Blob([result.summary || result.generated_text], { type: 'text/plain' });
  //                 const url = URL.createObjectURL(blob);
  //                 const a = document.createElement('a');
  //                 a.href = url;
  //                 a.download = 'summary.txt';
  //                 a.click();
  //               }}
  //               className="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300"
  //             >
  //               Download Summary
  //             </button>
  //             <button
  //               onClick={resetToMain}
  //               className="flex-1 py-3 px-6 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all duration-300"
  //             >
  //               Create New
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              IntelliNotes
            </h1>
          </div>
          <div className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300 cursor-pointer">
            <User className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            AI-Powered Document
            <span className="text-blue-600"> Summarizer</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your documents into intelligent summaries with AI and share them instantly via email
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl border border-gray-400 p-8 lg:p-12 shadow-lg">
          {/* Input Type Selection */}
          <div className="mb-8 ">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-blue-600" />
              Choose Input Type
            </h3>
            <div className="flex flex-col lg:flex-row gap-6">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="radio"
                  name="inputType"
                  value="text"
                  checked={inputType === 'text'}
                  onChange={(e) => setInputType(e.target.value)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  inputType === 'text' 
                    ? 'border-blue-600 bg-blue-600' 
                    : 'border-gray-300 group-hover:border-blue-600'
                }`}>
                  {inputType === 'text' && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <div className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                  inputType === 'text' 
                    ? 'bg-blue-100 text-blue-700 border border-blue-300' 
                    : 'bg-white text-gray-600 group-hover:bg-gray-100'
                }`}>
                  <Type className="h-5 w-5" />
                  <span className="font-medium">Text Document</span>
                </div>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="radio"
                  name="inputType"
                  value="pdf"
                  checked={inputType === 'pdf'}
                  onChange={(e) => setInputType(e.target.value)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  inputType === 'pdf' 
                    ? 'border-blue-600 bg-blue-600' 
                    : 'border-gray-300 group-hover:border-blue-600'
                }`}>
                  {inputType === 'pdf' && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <div className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                  inputType === 'pdf' 
                    ? 'bg-blue-100 text-blue-700 border border-blue-300' 
                    : 'bg-white text-gray-600 group-hover:bg-gray-100'
                }`}>
                  <File className="h-5 w-5" />
                  <span className="font-medium">PDF Document</span>
                </div>
              </label>
            </div>
          </div>

          {/* Dynamic Input Field */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              {inputType === 'text' ? 'Enter Your Text' : 'Upload PDF File'}
            </h3>

            <div className="flex flex-col">
              <div>
                {inputType === 'text' ? (
                  <textarea
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Paste your text content here... The AI will analyze and summarize it for you."
                    className="w-full h-48 px-4 py-4 bg-white border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                ) : (
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="sr-only"
                      id="pdf-upload"
                    />
                    <label
                      htmlFor="pdf-upload"
                      className="flex items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 transition-all duration-300 group"
                    >
                      <div className="text-center">
                        <Upload className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                        {pdfFile ? (
                          <div>
                            <p className="text-gray-800 font-medium">{pdfFile.name}</p>
                            {/* <p className="text-gray-500 text-sm mt-1">
                              {isExtracting ? 'Extracting text...' : extractedText ? 'Text extracted successfully!' : 'Click to change file'}
                            </p>
                            {isExtracting && (
                              <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mt-2"></div>
                            )} */}
                          </div>
                        ) : (
                          <div>
                            <p className="text-gray-800 font-medium mb-2">Drop your PDF here or click to browse</p>
                            <p className="text-gray-500 text-sm">Supports PDF files up to 10MB</p>
                          </div>
                        )}
                      </div>
                    </label>
                  </div>
                )}
              </div>

              {/* Prompt Input - Side by side on large screens */}
              <div>
                <h3 className="text-xl mt-5 font-semibold text-gray-800 mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-blue-600" />
                  Your Prompt
                </h3>
                <input
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder='Enter your prompt here... e.g., "Summarize the key points"'
                  className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
          </div>  
          
          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isProcessing || (inputType === 'text' && !noteText.trim()) || !prompt.trim()}
            className="w-full py-4 px-8 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:hover:scale-100 shadow-lg hover:shadow-blue-500/25"
          >
            {isProcessing ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing with AI...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Brain className="h-5 w-5" />
                <span>Generate Summary</span>
              </div>
            )}
          </button>

         
        </div>
      </div>
    </div>
  );
}