import xmlschema
xml_file="dogs.xml"
xsd_file="dogs.xsd"

validator = xmlschema.XMLSchema(xsd_file)
if validator.is_valid(xml_file):
    print("valid")
else:
    print("not valid")
    print(validator.validate(xml_file)) 