package com.mg.learning.coreplatform.streams;

import java.io.BufferedInputStream;
import java.io.BufferedWriter;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.*;
import java.util.HashMap;
import java.util.Map;

public class ReadWriteZipFile {

    public static void main(String[] args) {
        String[] data = {
                "Line 1",
                "Line 2 2",
                "Line 3 3 3",
                "Line 4 4 4 4",
                "Line 5 5 5 5 5"
        };

        try (FileSystem zipFs = openZip(Paths.get("myData.zip"))) {
            copyToZip(zipFs);
            writeToFileInZip1(zipFs, data);

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    private static void writeToFileInZip1(FileSystem zipFs, String[] data) throws IOException {
        try (BufferedWriter writer = Files.newBufferedWriter(zipFs.getPath("/newFile1.txt"))) {
            for (String d:data) {
                writer.write(d);
                writer.newLine();
            }
        }
    }

    private static void copyToZip(FileSystem zipFs) throws IOException {
        Path sourceFile = Paths.get("file1.txt");
        Path destFile = zipFs.getPath("/file1Copied.txt");
        Files.copy(sourceFile, destFile, StandardCopyOption.REPLACE_EXISTING);
    }

    private static FileSystem openZip(Path zipPath) throws IOException, URISyntaxException {
        Map<String, String> providerProps = new HashMap<>();
        providerProps.put("create", "true");

        URI zipUri = new URI("jar:file", zipPath.toUri().getPath(), null);
        FileSystem zipFs = FileSystems.newFileSystem(zipUri, providerProps);

        return zipFs;
    }

}
