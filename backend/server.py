from fastapi import FastAPI, UploadFile, Form
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import PyPDF2
from pydantic import BaseModel
import io

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:3000"] for stricter
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TextRequest(BaseModel):
    prompt: str
    text: str


@app.get("/")
def root():
    return {"message": "Backend is working!"}

@app.post("/generate-doc-from-text")
async def generate_doc_from_text(data: TextRequest):
    # You can replace this with AI / custom processing
    result = {
        "type": "text",
        "original_text": data.text,
        "prompt": data.prompt,
        "processed": f"Processed text with prompt: {data.prompt}"
    }
    print("Received text:", data.text)
    print("Received prompt:", data.prompt)
    return JSONResponse(content=result)


@app.post("/generate-doc-from-pdf")
async def generate_doc_from_pdf(file: UploadFile, prompt: str = Form(...)):
    pdf_bytes = await file.read()
    pdf_stream = io.BytesIO(pdf_bytes)
    reader = PyPDF2.PdfReader(pdf_stream)

    extracted_text = ""
    for page in reader.pages:
        extracted_text += page.extract_text() or ""

    print("Received PDF file:", file.filename)
    print("Extracted text:", extracted_text)
    print("Received prompt:", prompt)

    result = {
        "type": "pdf",
        "filename": file.filename,
        "prompt": prompt,
        "extracted_text": extracted_text[:500] + "..." 
    }
    return JSONResponse(content=result)
