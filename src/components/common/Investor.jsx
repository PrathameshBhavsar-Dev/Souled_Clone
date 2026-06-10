import React from "react";

const Investor = () => {
  // Replace this with your actual PDF URL
  const pdfUrl = "/path-to-your-pdf.pdf";

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6 text-center">Investor Relations</h1>

      <div
        onClick={() => window.open(pdfUrl, "_blank")}
        className="cursor-pointer flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition"
      >
        <div className="flex items-center gap-4">
          {/* Icon placeholder */}
          <div className="w-8 h-8 bg-blue-200 rounded flex items-center justify-center text-blue-700 font-bold">
            📄
          </div>

          <div>
            <p className="font-medium text-gray-800">Corporate Social Responsibility Policy (CSR Policy)</p>
            <p className="text-sm text-gray-500">2025 • PDF</p>
          </div>
        </div>

        <div className="text-gray-400 text-xl">➔</div>
      </div>
    </div>
  );
};

export default Investor;
