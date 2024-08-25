//your JS code here. If required.
// Function to change the color of a grid item
document.getElementById('change_button').addEventListener('click', function() {
    // Get the block ID and color from the input fields
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

    // Reset all grid items to transparent background
    const gridItems = document.getElementsByClassName('grid-item');
    for (let item of gridItems) {
        item.style.backgroundColor = 'transparent';
    }

    // Change the background color of the specified grid item
    const selectedBlock = document.getElementById(blockId);
    if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
    }
});

// Function to reset the grid
document.getElementById('Reset').addEventListener('click', function() {
    // Reset all grid items to transparent background
    const gridItems = document.getElementsByClassName('grid-item');
    for (let item of gridItems) {
        item.style.backgroundColor = 'transparent';
    }
});
