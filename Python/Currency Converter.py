riel = 2103942;
kyat = 19092;
krone = 109;
lek = 9094;

"""
print(riel)
print(kyat)
print(krone)
print(lek)
"""

riel_to_usd = 0.00025
kyat_to_usd = 0.00048
krone_to_usd = 0.09
lek_to_usd = 0.011

riel_dollars = riel * riel_to_usd
kyat_dollars = kyat * kyat_to_usd
krone_dollars = krone * krone_to_usd
lek_dollars = lek * lek_to_usd

total_dollars = riel_dollars + kyat_dollars + krone_dollars + lek_dollars - (1*4)
print(total_dollars)





