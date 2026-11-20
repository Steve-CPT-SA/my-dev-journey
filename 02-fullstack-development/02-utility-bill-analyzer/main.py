import csv
print("Utility Bill Analyzer")

month = input("Enter month: ")
print(month)

electricity_cost = input("Enter electricity cost: ")
print(electricity_cost)

water_cost = input("Enter water cost: ")
print(water_cost)

with open("bills.csv", "a") as file:
    file.write(f"{month},{electricity_cost},{water_cost}\n")