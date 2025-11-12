package com.aquatech.backend.service;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;
import java.util.Base64;
import java.util.stream.Collectors;
import java.math.BigInteger;

@Service
public class SolutionService {

    public String solve(String missionId, String parameters) {
        switch (missionId) {
            case "540b72b3-e57b-4ab7-8997-98f23c4f328b": // Perfect Number
                return findNthPerfectNumber(parameters);
            case "8958f1cf-a620-42b9-b230-7919c6005ee0": // Reverse String
                return reverseString(parameters);
            case "6b59fc9f-4d30-401a-8c27-55fa0af3f6dd": // ROT13 Decode
                return rot13Decode(parameters);
            case "7009cbef-94d8-45e4-9e4d-502bae1e4730": // Checksum ASCII modulo 1000
                return calculateChecksum(parameters);
            case "0520ccd3-bb89-4434-9d00-cae877718005": // Luhn check digit
                return calculateLuhnCheckDigit(parameters);
            case "1bb6455d-945b-468e-8c05-227fd219f0e9": // Palindrome
                return isPalindrome(parameters);
            case "38ab4429-cf7c-4e35-8bd8-274619aa24ca": // Missing Fibonacci numbers
                return findMissingFibonacciNumbers(parameters);
            case "0956586c-8e70-4322-8f28-866ada6f03ef": // Replace string in ArrayList
                return replaceStringInArrayList(parameters);
            case "5b4e405a-a623-4b46-b9c4-7f4ca31ac69e": // Decode Base64
                return decodeBase64(parameters);
            default:
                return "Unknown Mission Type";
        }
    }

    // --- Solver Methods ---
    private String findNthPerfectNumber(String parametersJson) {
        // Parameters: {"nth element": "5"}
        try {
            int n = Integer.parseInt(parametersJson.trim());
            long[] perfectNumbers = {6, 28, 496, 8128, 33550336, 8589869056L, 137438691328L}; // First 7 perfect numbers
            if (n > 0 && n <= perfectNumbers.length) {
                return String.valueOf(perfectNumbers[n - 1]);
            }
            return "Invalid 'nth element' parameter or out of range.";
        } catch (NumberFormatException e) {
            return "Invalid 'nth element' parameter format.";
        }
    }

    // Reverse a String
    private String reverseString(String input) {
        return new StringBuilder(input).reverse().toString();
    }

    // ROT13 Decode
    private String rot13Decode(String input) {
        StringBuilder sb = new StringBuilder();
        for (char c : input.toCharArray()) {
            if (c >= 'a' && c <= 'm') {
                sb.append((char) (c + 13));
            } else if (c >= 'n' && c <= 'z') {
                sb.append((char) (c - 13));
            } else if (c >= 'A' && c <= 'M') {
                sb.append((char) (c + 13));
            } else if (c >= 'N' && c <= 'Z') {
                sb.append((char) (c - 13));
            } else {
                sb.append(c);
            }
        }
        return sb.toString();
    }

    // Checksum of ASCII values modulo 1000
    private String calculateChecksum(String input) {
        long sum = 0;
        for (char c : input.toCharArray()) {
            sum += c;
        }
        return String.valueOf(sum % 1000);
    }

    // Luhn check digit
    private String calculateLuhnCheckDigit(String numberSequence) {
        int sum = 0;
        boolean alternate = false;
        for (int i = numberSequence.length() - 1; i >= 0; i--) {
            int digit = Integer.parseInt(numberSequence.substring(i, i + 1));
            if (alternate) {
                digit *= 2;
                if (digit > 9) {
                    digit = (digit % 10) + 1;
                }
            }
            sum += digit;
            alternate = !alternate;
        }
        int checkDigit = (sum * 9) % 10;
        return String.valueOf(checkDigit);
    }

    // Palindrome
    private String isPalindrome(String input) {
        String cleaned = input.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        String reversed = new StringBuilder(cleaned).reverse().toString();
        return String.valueOf(cleaned.equals(reversed));
    }

    // Missing Fibonacci numbers
    private String findMissingFibonacciNumbers(String parameters) {
        String[] parts = parameters.split(",");
        List<Long> fibSequence = new ArrayList<>();
        for (String part : parts) {
            fibSequence.add(Long.parseLong(part.trim()));
        }

        if (fibSequence.size() < 2) {
            return "Invalid Fibonacci sequence.";
        }

        // Generate Fibonacci numbers up to the max in the given sequence
        List<Long> fullFib = new ArrayList<>();
        fullFib.add(0L);
        fullFib.add(1L);
        int i = 2;
        while (fullFib.get(i - 1) < fibSequence.get(fibSequence.size() - 1)) {
            fullFib.add(fullFib.get(i - 1) + fullFib.get(i - 2));
            i++;
        }

        for (Long num : fullFib) {
            if (!fibSequence.contains(num) && num > 1) {
                return String.valueOf(num);
            }
        }
        return "No missing Fibonacci number found or sequence is complete.";
    }

    // Replace string at given index in ArrayList
    private String replaceStringInArrayList(String parametersJson) {
        try {
            // Extract index, replacement, and arrayList manually
            int indexStart = parametersJson.indexOf("\"index\": \"") + "\"index\": \"".length();
            int indexEnd = parametersJson.indexOf("\"", indexStart);
            int index = Integer.parseInt(parametersJson.substring(indexStart, indexEnd));

            int replacementStart = parametersJson.indexOf("\"replacement\": \"") + "\"replacement\": \"".length();
            int replacementEnd = parametersJson.indexOf("\"", replacementStart);
            String replacement = parametersJson.substring(replacementStart, replacementEnd);

            int arrayListStart = parametersJson.indexOf("\"arrayList\": \"") + "\"arrayList\": \"".length();
            int arrayListEnd = parametersJson.indexOf("\"", arrayListStart);
            String arrayListString = parametersJson.substring(arrayListStart, arrayListEnd);

            arrayListString = arrayListString.substring(1, arrayListString.length() - 1);
            List<String> list = new ArrayList<>();
            for (String s : arrayListString.split("', '")) {
                list.add(s.replace("'", ""));
            }

            if (index >= 0 && index < list.size()) {
                list.set(index, replacement);
                return list.stream()
                           .map(s -> "'" + s + "'")
                           .collect(Collectors.joining(", ", "[", "]"));
            }
            return "Invalid index or arrayList.";
        } catch (Exception e) {
            return "Error parsing parameters for replaceStringInArrayList: " + e.getMessage();
        }
    }

    // Decode Base64
    private String decodeBase64(String encodedString) {
        try {
            byte[] decodedBytes = Base64.getDecoder().decode(encodedString);
            return new String(decodedBytes);
        } catch (IllegalArgumentException e) {
            return "Invalid Base64 string.";
        }
    }
}
