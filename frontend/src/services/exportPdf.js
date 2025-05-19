import jsPDF from "jspdf";

export function exportScheduleAsPdf(schedule) {
  const doc = new jsPDF();
  let y = 10;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Study Schedule", 105, y, { align: "center" });
  y += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  Object.keys(schedule).forEach(date => {
    if (y > 270) {
      doc.addPage();
      y = 10;
    }

    doc.setFont("helvetica", "bold");
    doc.text(date, 10, y);
    y += 6;

    const subjects = schedule[date];
    Object.keys(subjects).forEach(subject => {
      doc.setFont("helvetica", "bold");
      doc.text(`  ${subject}`, 10, y);
      y += 5;

      const topics = subjects[subject];
      doc.setFont("helvetica", "normal");
      Object.entries(topics).forEach(([topic, hours]) => {
        doc.text(`    • ${topic}: ${hours} hrs`, 10, y);
        y += 5;
      });
    });

    y += 5; // extra spacing between days
  });

  doc.save("StudySchedule.pdf");
}
