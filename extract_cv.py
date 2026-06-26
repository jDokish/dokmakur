import PyPDF2

path = 'CV.pdf'
reader = PyPDF2.PdfReader(path)
text = '\n'.join(page.extract_text() or '' for page in reader.pages)
print(text[:20000])
