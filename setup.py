from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in lms_docs/__init__.py
from lms_docs import __version__ as version

setup(
	name="lms_docs",
	version=version,
	description="Documentation for Frappe LMS App",
	author="Frappe",
	author_email="jannat@frappe.io",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
