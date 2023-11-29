function findUniqueElements(arr1, arr2) {
    // Combine both arrays
    const combinedArray = arr1.concat(arr2);

    // Use a Set to store unique elements
    const uniqueElements = new Set(combinedArray);

    // Convert the Set back to an array
    const resultArray = Array.from(uniqueElements);

    return resultArray;
  }

  function displayUniqueElements() {
    // Get arrays from input fields
    const inputArray1 = document.getElementById('array1').value.split(',');
    const inputArray2 = document.getElementById('array2').value.split(',');

    // Call the findUniqueElements function
    const uniqueElements = findUniqueElements(inputArray1, inputArray2);

    // Display the result
    document.getElementById('result').innerHTML = `<strong>Unique Elements:</strong> ${uniqueElements.join(', ')}`;
  }

  // Add event listener to the button
  document.getElementById('findButton').addEventListener('click', displayUniqueElements);