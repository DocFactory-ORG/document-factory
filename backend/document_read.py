import docx
import os
import argparse


# checks if the docx file is not corrupted
def is_non_corrupted(file_path) -> bool:
    f = open(file_path,'rb')
    return f.read(4) == b'PK\x03\x04'

"""
Main checker to check the passed in input file.
1. If the file is in a readable format
2. If the file is a docx file
3. If the file is in a non corrupted docx file
"""
def check_file(file_path) -> bool:
    return os.path.isfile(file_path) and os.path.splitext(file_path)[1].lower() == '.docx' and is_non_corrupted(file_path)


def read_word_document(file_path) -> str:
    doc = docx.Document(file_path)
    text = []
    for para in doc.paragraphs:
        text.append(para.text)
    return '\n'.join(text)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-f", dest="file_name", help="Please add the name of the file eg. new_example.docx")
    args = parser.parse_args()

    if not args.file_name:
        raise ValueError("Please enter the filename.")
     
    if not check_file(args.file_name):
        raise ValueError("Check that you have placed the file in the directory mentioned in the SETUP or that your file is in the correct format.")

    # Read Word document    
    print("Reading Word document:")
    print(read_word_document(args.file_name))
    
