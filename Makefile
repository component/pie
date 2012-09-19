
build: components index.js pie.css
	@component build --dev

components:
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
