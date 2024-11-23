#include <iostream>
#include <vector>
#include <string>
#include <json/json.h>  // Install jsoncpp to parse JSON

using namespace std;

struct Product {
    string name;
    double price;
    double rating;
    int features;
    int brand;
    double score;
};

int main(int argc, char* argv[]) {
    if (argc < 2) {
        cerr << "No input data provided" << endl;
        return 1;
    }

    // Parse the input JSON data
    string inputData = argv[1];
    Json::CharReaderBuilder reader;
    Json::Value root;
    istringstream s(inputData);
    string errs;

    bool parsingSuccessful = Json::parseFromStream(reader, s, &root, &errs);
    if (!parsingSuccessful) {
        cerr << "Error parsing JSON data: " << errs << endl;
        return 1;
    }

    // Extract product data
    vector<Product> products;
    const Json::Value productArray = root["products"];
    for (const auto& product : productArray) {
        Product p;
        p.name = product["name"].asString();
        p.price = product["price"].asDouble();
        p.rating = product["rating"].asDouble();
        p.features = product["features"].asInt();
        p.brand = product["brand"].asInt();
        products.push_back(p);
    }

    // Extract weights
    const Json::Value weight = root["weights"];
    double price_weight = weight["price"].asDouble();
    double rating_weight = weight["rating"].asDouble();
    double features_weight = weight["features"].asDouble();
    double brand_weight = weight["brand"].asDouble();

    // Continue with your scoring logic to calculate best product

    cout << "Best Product: " << "Product Name" << endl;

    return 0;
}
