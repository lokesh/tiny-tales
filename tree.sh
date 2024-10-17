
# Default values
DEPTH=2
IGNORE="node_modules"
OUTPUT_FILE="instructions/directory_structure.md"

# Function to print usage
print_usage() {
    echo "Usage: $0 [-d DEPTH] [-i IGNORE] [-o OUTPUT_FILE]"
    echo "  -d DEPTH        Set the depth for the tree command (default: 2)"
    echo "  -i IGNORE       Set the ignore pattern (default: node_modules)"
    echo "  -o OUTPUT_FILE  Set the output file name (default: directory_structure.md)"
    echo "  -h              Display this help message"
}

# Parse command line options
while getopts ":d:i:o:h" opt; do
    case $opt in
        d) DEPTH="$OPTARG";;
        i) IGNORE="$OPTARG";;
        o) OUTPUT_FILE="$OPTARG";;
        h) print_usage; exit 0;;
        \?) echo "Invalid option -$OPTARG" >&2; print_usage; exit 1;;
    esac
done

# Function to update the tree structure
update_tree() {
    echo "# Project Directory Structure" > "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
    echo "\`\`\`" >> "$OUTPUT_FILE"
    tree -L "$DEPTH" -I "$IGNORE" >> "$OUTPUT_FILE"
    echo "\`\`\`" >> "$OUTPUT_FILE"
    echo "Directory structure updated in $OUTPUT_FILE"
}

# Run the update
update_tree