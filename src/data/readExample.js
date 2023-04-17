const fs = require("fs")

module.exports = (file) => ({
    "main/intro.html": () => fs.readFileSync("data/examples/main/intro.html", "utf8"),
    "main/instructions.html": () => fs.readFileSync("data/examples/main/instructions.html", "utf8"),
    "main/instructions_other.html": () => fs.readFileSync("data/examples/main/instructions_other.html", "utf8"),
    "main/impressum.html": () => fs.readFileSync("data/examples/main/impressum.html", "utf8"),
    "eno/intro.html": () => fs.readFileSync("data/examples/eno/intro.html", "utf-8"),
    "eno/1_example.html": () => fs.readFileSync("data/examples/eno/1_example.html", "utf-8"),
    "eno/1_example_1.eno": () => fs.readFileSync("data/examples/eno/1_example_1.eno", "utf-8"),
    "eno/1_example_2.eno": () => fs.readFileSync("data/examples/eno/1_example_2.eno", "utf-8"),
    "eno/2_example.html": () => fs.readFileSync("data/examples/eno/2_example.html", "utf-8"),
    "eno/2_example_1.eno": () => fs.readFileSync("data/examples/eno/2_example_1.eno", "utf-8"),
    "eno/2_example_2.eno": () => fs.readFileSync("data/examples/eno/2_example_2.eno", "utf-8"),
    "eno/3_example.html": () => fs.readFileSync("data/examples/eno/3_example.html", "utf-8"),
    "eno/3_example_1.eno": () => fs.readFileSync("data/examples/eno/3_example_1.eno", "utf-8"),
    "eno/3_example_2.eno": () => fs.readFileSync("data/examples/eno/3_example_2.eno", "utf-8"),
    "eno/4_example.html": () => fs.readFileSync("data/examples/eno/4_example.html", "utf-8"),
    "eno/4_example_1.eno": () => fs.readFileSync("data/examples/eno/4_example_1.eno", "utf-8"),
    "eno/4_example_2.eno": () => fs.readFileSync("data/examples/eno/4_example_2.eno", "utf-8"),
    "eno/4_example_3.eno": () => fs.readFileSync("data/examples/eno/4_example_3.eno", "utf-8"),
    "eno/5_example.html": () => fs.readFileSync("data/examples/eno/5_example.html", "utf-8"),
    "eno/5_example_1.eno": () => fs.readFileSync("data/examples/eno/5_example_1.eno", "utf-8"),
    "eno/5_example_2.eno": () => fs.readFileSync("data/examples/eno/5_example_2.eno", "utf-8"),
    "eno/6_example.html": () => fs.readFileSync("data/examples/eno/6_example.html", "utf-8"),
    "eno/6_example_1.eno": () => fs.readFileSync("data/examples/eno/6_example_1.eno", "utf-8"),
    "eno/6_example_2.eno": () => fs.readFileSync("data/examples/eno/6_example_2.eno", "utf-8"),
    "eno/6_example_3.eno": () => fs.readFileSync("data/examples/eno/6_example_3.eno", "utf-8"),
    "hjson/intro.html": () => fs.readFileSync("data/examples/hjson/intro.html", "utf-8"),
    "hjson/1_example.html": () => fs.readFileSync("data/examples/hjson/1_example.html", "utf-8"),
    "hjson/1_example_1.hjson": () => fs.readFileSync("data/examples/hjson/1_example_1.hjson", "utf-8"),
    "hjson/1_example_2.hjson": () => fs.readFileSync("data/examples/hjson/1_example_2.hjson", "utf-8"),
    "hjson/1_example_3.hjson": () => fs.readFileSync("data/examples/hjson/1_example_3.hjson", "utf-8"),
    "hjson/2_example.html": () => fs.readFileSync("data/examples/hjson/2_example.html", "utf-8"),
    "hjson/2_example.hjson": () => fs.readFileSync("data/examples/hjson/2_example.hjson", "utf-8"),
    "ini/intro.html": () => fs.readFileSync("data/examples/ini/intro.html", "utf-8"),
    "ini/1_example.html": () => fs.readFileSync("data/examples/ini/1_example.html", "utf-8"),
    "ini/1_example_1.ini": () => fs.readFileSync("data/examples/ini/1_example_1.ini", "utf-8"),
    "ini/1_example_2.ini": () => fs.readFileSync("data/examples/ini/1_example_2.ini", "utf-8"),
    "ini/2_example.html": () => fs.readFileSync("data/examples/ini/2_example.html", "utf-8"),
    "ini/2_example_1.ini": () => fs.readFileSync("data/examples/ini/2_example_1.ini", "utf-8"),
    "ini/2_example_2.ini": () => fs.readFileSync("data/examples/ini/2_example_2.ini", "utf-8"),
    "ini/3_example.html": () => fs.readFileSync("data/examples/ini/3_example.html", "utf-8"),
    "ini/3_example_1.ini": () => fs.readFileSync("data/examples/ini/3_example_1.ini", "utf-8"),
    "ini/3_example_2.ini": () => fs.readFileSync("data/examples/ini/3_example_2.ini", "utf-8"),
    "ini/4_example.html": () => fs.readFileSync("data/examples/ini/4_example.html", "utf-8"),
    "ini/4_example.ini": () => fs.readFileSync("data/examples/ini/4_example.ini", "utf-8"),
    "json/intro.html": () => fs.readFileSync("data/examples/json/intro.html", "utf8"),
    "json/1_example.html": () => fs.readFileSync("data/examples/json/1_example.html", "utf8"),
    "json/1_example_1.json": () => fs.readFileSync("data/examples/json/1_example_1.json", "utf-8"),
    "json/1_example_2.json": () => fs.readFileSync("data/examples/json/1_example_2.json", "utf-8"),
    "json/1_example_3.json": () => fs.readFileSync("data/examples/json/1_example_3.json", "utf-8"),
    "json/2_example.html": () => fs.readFileSync("data/examples/json/2_example.html", "utf8"),
    "json/2_example_1.json": () => fs.readFileSync("data/examples/json/2_example_1.json", "utf-8"),
    "json/2_example_2.json": () => fs.readFileSync("data/examples/json/2_example_2.json", "utf-8"),
    "json/2_example_3.json": () => fs.readFileSync("data/examples/json/2_example_3.json", "utf-8"),
    "json/3_example.html": () => fs.readFileSync("data/examples/json/3_example.html", "utf8"),
    "json/3_example_1.json": () => fs.readFileSync("data/examples/json/3_example_1.json", "utf-8"),
    "json/3_example_2.json": () => fs.readFileSync("data/examples/json/3_example_2.json", "utf-8"),
    "json/3_example_3.json": () => fs.readFileSync("data/examples/json/3_example_3.json", "utf-8"),
    "json/4_example.html": () => fs.readFileSync("data/examples/json/4_example.html", "utf8"),
    "json/4_example.json": () => fs.readFileSync("data/examples/json/4_example.json", "utf-8"),
    "json/5_example.html": () => fs.readFileSync("data/examples/json/5_example.html", "utf8"),
    "json/5_example.json": () => fs.readFileSync("data/examples/json/5_example.json", "utf-8"),
    "json5/intro.html": () => fs.readFileSync("data/examples/json5/intro.html", "utf8"),
    "json5/1_example.html": () => fs.readFileSync("data/examples/json5/1_example.html", "utf8"),
    "json5/1_example_1.json5": () => fs.readFileSync("data/examples/json5/1_example_1.json5", "utf-8"),
    "json5/1_example_2.json5": () => fs.readFileSync("data/examples/json5/1_example_2.json5", "utf-8"),
    "json5/2_example.html": () => fs.readFileSync("data/examples/json5/2_example.html", "utf8"),
    "json5/2_example_1.json5": () => fs.readFileSync("data/examples/json5/2_example_1.json5", "utf-8"),
    "json5/2_example_2.json5": () => fs.readFileSync("data/examples/json5/2_example_2.json5", "utf-8"),
    "properties/intro.html": () => fs.readFileSync("data/examples/properties/intro.html", "utf8"),
    "properties/1_example.html": () => fs.readFileSync("data/examples/properties/1_example.html", "utf8"),
    "properties/1_example_1.properties": () => fs.readFileSync("data/examples/properties/1_example_1.properties", "utf-8"),
    "properties/1_example_2.properties": () => fs.readFileSync("data/examples/properties/1_example_2.properties", "utf-8"),
    "properties/1_example_3.properties": () => fs.readFileSync("data/examples/properties/1_example_3.properties", "utf-8"),
    "properties/2_example.html": () => fs.readFileSync("data/examples/properties/2_example.html", "utf8"),
    "properties/2_example_1.properties": () => fs.readFileSync("data/examples/properties/2_example_1.properties", "utf-8"),
    "properties/2_example_2.properties": () => fs.readFileSync("data/examples/properties/2_example_2.properties", "utf-8"),
    "properties/3_example.html": () => fs.readFileSync("data/examples/properties/3_example.html", "utf8"),
    "properties/3_example_1.properties": () => fs.readFileSync("data/examples/properties/3_example_1.properties", "utf-8"),
    "properties/3_example_2.properties": () => fs.readFileSync("data/examples/properties/3_example_2.properties", "utf-8"),
    "properties/4_example.html": () => fs.readFileSync("data/examples/properties/4_example.html", "utf8"),
    "properties/4_example_1.properties": () => fs.readFileSync("data/examples/properties/4_example_1.properties", "utf-8"),
    "properties/4_example_2.properties": () => fs.readFileSync("data/examples/properties/4_example_2.properties", "utf-8"),
    "properties/5_example.html": () => fs.readFileSync("data/examples/properties/5_example.html", "utf8"),
    "properties/5_example.properties": () => fs.readFileSync("data/examples/properties/5_example.properties", "utf-8"),
    "toml/intro.html": () => fs.readFileSync("data/examples/toml/intro.html", "utf8"),
    "toml/1_example.html": () => fs.readFileSync("data/examples/toml/1_example.html", "utf8"),
    "toml/1_example_1.toml": () => fs.readFileSync("data/examples/toml/1_example_1.toml", "utf-8"),
    "toml/1_example_2.toml": () => fs.readFileSync("data/examples/toml/1_example_2.toml", "utf-8"),
    "toml/2_example.html": () => fs.readFileSync("data/examples/toml/2_example.html", "utf8"),
    "toml/2_example_1.toml": () => fs.readFileSync("data/examples/toml/2_example_1.toml", "utf-8"),
    "toml/2_example_2.toml": () => fs.readFileSync("data/examples/toml/2_example_2.toml", "utf-8"),
    "toml/2_example_3.toml": () => fs.readFileSync("data/examples/toml/2_example_3.toml", "utf-8"),
    "toml/3_example.html": () => fs.readFileSync("data/examples/toml/3_example.html", "utf8"),
    "toml/3_example_1.toml": () => fs.readFileSync("data/examples/toml/3_example_1.toml", "utf-8"),
    "toml/3_example_2.toml": () => fs.readFileSync("data/examples/toml/3_example_2.toml", "utf-8"),
    "toml/4_example.html": () => fs.readFileSync("data/examples/toml/4_example.html", "utf8"),
    "toml/4_example_1.toml": () => fs.readFileSync("data/examples/toml/4_example_1.toml", "utf-8"),
    "toml/4_example_2.toml": () => fs.readFileSync("data/examples/toml/4_example_2.toml", "utf-8"),
    "toml/5_example.html": () => fs.readFileSync("data/examples/toml/5_example.html", "utf8"),
    "toml/5_example.toml": () => fs.readFileSync("data/examples/toml/5_example.toml", "utf-8"),
    "xml/intro.html": () => fs.readFileSync("data/examples/xml/intro.html", "utf8"),
    "xml/1_example.html": () => fs.readFileSync("data/examples/xml/1_example.html", "utf8"),
    "xml/1_example_1.xml": () => fs.readFileSync("data/examples/xml/1_example_1.xml", "utf-8"),
    "xml/1_example_2.xml": () => fs.readFileSync("data/examples/xml/1_example_2.xml", "utf-8"),
    "xml/1_example_3.xml": () => fs.readFileSync("data/examples/xml/1_example_3.xml", "utf-8"),
    "xml/2_example.html": () => fs.readFileSync("data/examples/xml/2_example.html", "utf8"),
    "xml/2_example_1.xml": () => fs.readFileSync("data/examples/xml/2_example_1.xml", "utf-8"),
    "xml/2_example_2.xml": () => fs.readFileSync("data/examples/xml/2_example_2.xml", "utf-8"),
    "xml/3_example.html": () => fs.readFileSync("data/examples/xml/3_example.html", "utf8"),
    "xml/3_example_1.xml": () => fs.readFileSync("data/examples/xml/3_example_1.xml", "utf-8"),
    "xml/3_example_2.xml": () => fs.readFileSync("data/examples/xml/3_example_2.xml", "utf-8"),
    "xml/4_example.html": () => fs.readFileSync("data/examples/xml/4_example.html", "utf8"),
    "xml/4_example.xml": () => fs.readFileSync("data/examples/xml/4_example.xml", "utf-8"),
    "xml/5_example.html": () => fs.readFileSync("data/examples/xml/5_example.html", "utf8"),
    "xml/5_example_1.xml": () => fs.readFileSync("data/examples/xml/5_example_1.xml", "utf-8"),
    "xml/5_example_2.xml": () => fs.readFileSync("data/examples/xml/5_example_2.xml", "utf-8"),
    "xml/5_example_3.xml": () => fs.readFileSync("data/examples/xml/5_example_3.xml", "utf-8"),
    "xml/6_example.html": () => fs.readFileSync("data/examples/xml/6_example.html", "utf8"),
    "xml/6_example.xml": () => fs.readFileSync("data/examples/xml/6_example.xml", "utf-8"),
    "yaml/intro.html": () => fs.readFileSync("data/examples/yaml/intro.html", "utf8"),
    "yaml/1_example.html": () => fs.readFileSync("data/examples/yaml/1_example.html", "utf8"),
    "yaml/1_example_1.yaml": () => fs.readFileSync("data/examples/yaml/1_example_1.yaml", "utf-8"),
    "yaml/1_example_2.yaml": () => fs.readFileSync("data/examples/yaml/1_example_2.yaml", "utf-8"),
    "yaml/2_example.html": () => fs.readFileSync("data/examples/yaml/2_example.html", "utf8"),
    "yaml/2_example_1.yaml": () => fs.readFileSync("data/examples/yaml/2_example_1.yaml", "utf-8"),
    "yaml/2_example_2.yaml": () => fs.readFileSync("data/examples/yaml/2_example_2.yaml", "utf-8"),
    "yaml/2_example_3.yaml": () => fs.readFileSync("data/examples/yaml/2_example_3.yaml", "utf-8"),
    "yaml/3_example.html": () => fs.readFileSync("data/examples/yaml/3_example.html", "utf8"),
    "yaml/3_example_1.yaml": () => fs.readFileSync("data/examples/yaml/3_example_1.yaml", "utf-8"),
    "yaml/3_example_2.yaml": () => fs.readFileSync("data/examples/yaml/3_example_2.yaml", "utf-8"),
    "yaml/4_example.html": () => fs.readFileSync("data/examples/yaml/4_example.html", "utf8"),
    "yaml/4_example_1.yaml": () => fs.readFileSync("data/examples/yaml/4_example_1.yaml", "utf-8"),
    "yaml/4_example_2.yaml": () => fs.readFileSync("data/examples/yaml/4_example_2.yaml", "utf-8"),
    "yaml/5_example.html": () => fs.readFileSync("data/examples/yaml/5_example.html", "utf8"),
    "yaml/5_example.yaml": () => fs.readFileSync("data/examples/yaml/5_example.yaml", "utf-8"),
    "yaml/6_example.html": () => fs.readFileSync("data/examples/yaml/6_example.html", "utf8"),
    "yaml/6_example_1.yaml": () => fs.readFileSync("data/examples/yaml/6_example_1.yaml", "utf-8"),
    "yaml/6_example_2.yaml": () => fs.readFileSync("data/examples/yaml/6_example_2.yaml", "utf-8"),
}[file])()