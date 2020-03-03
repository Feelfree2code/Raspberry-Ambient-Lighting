package com.kagan.client;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class ConfigurationManager {
    // read and write

    public boolean load() {
        try (BufferedReader reader = Files.newBufferedReader(Paths.get("configuration.json"));) {

        } catch (FileNotFoundException e) {
            createFile();
            return false;
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        return true;
    }

    public void save() {
        try (BufferedWriter writer = Files.newBufferedWriter(Paths.get("configuration.json"))) {
            JSONObject employeeDetails = new JSONObject();

        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }

    private void createFile() {
        File file = new File("configuration.json");

        try{
            if (file.createNewFile()){
                System.out.println("File Created:" + file.getName());
            }
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.getStackTrace();
        }
    }
}
