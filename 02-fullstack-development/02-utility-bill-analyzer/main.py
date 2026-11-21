import csv
print("Utility Bill Analyzer")
print("UTILITY BILL REPORT")
print("-------------------")
# month = input("Enter month: ")
# print(month)

# electricity_cost = input("Enter electricity cost: ")
# print(electricity_cost)

# water_cost = input("Enter water cost: ")
# print(water_cost)

# with open("bills.csv", "a") as file:
#    file.write(f"{month},{electricity_cost},{water_cost}\n")

bills = []
with open("bills.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        bills.append(row)

if bills:
    total_electricity = 0
    for bill in bills:
        total_electricity += int(bill["ElectricityCost"])
    print(f"Total Electricity Cost: {total_electricity}")

    total_water = 0
    for bill in bills:
        total_water += int(bill["WaterCost"])
    print(f"Total Water Cost: {total_water}")

    combined_total = total_electricity + total_water
    print(f"Total Utility Cost: {combined_total}")

    average_electricity = total_electricity / len(bills)
    print(f"Average Electricity Cost: {average_electricity:.2f}")

    average_water = total_water / len(bills)
    print(f"Average Water Cost: {average_water:.2f}")

    average_combined = combined_total / len(bills)
    print(f"Average Utility Cost: {average_combined:.2f}")

    highest_month = bills[0]["Month"]
    highest_cost = int(bills[0]["ElectricityCost"]) + int(bills[0]["WaterCost"])

    lowest_month = bills[0]["Month"]
    lowest_cost = int(bills[0]["ElectricityCost"]) + int(bills[0]["WaterCost"])

    for bill in bills:
        monthly_total = int(bill["ElectricityCost"]) + int(bill["WaterCost"])

        if monthly_total > highest_cost:
            highest_cost = monthly_total
            highest_month = bill["Month"]

        if monthly_total < lowest_cost:
            lowest_cost = monthly_total
            lowest_month = bill["Month"]

    print(f"Highest Expense Month: {highest_month} ({highest_cost})")
    print(f"Lowest Expense Month: {lowest_month} ({lowest_cost})")

else:
    print("No bills found.")