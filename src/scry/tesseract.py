from pathlib import Path

from PIL import Image

import pytesseract

print(pytesseract.image_to_string(Image.open(Path(__file__).parent / 'images/test.png')))
