import csv

def read_csv(file_path):
    with open(file_path, 'r', newline='') as csv_file:
        csv_reader = csv.reader(csv_file)
        data = [[cell for cell in row if cell.strip()] for row in csv_reader]  # Remove empty strings
    return data

# Example usage

file_path = "BrandVendor Reference.csv"
csv_data = read_csv(file_path)
print(csv_data)
