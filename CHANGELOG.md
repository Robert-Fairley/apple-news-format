# Changelog

## v0.3.0 - December 4, 2021

This should bring the individual components more or less up to date, but what's lacking is a more thorough audit to be certain.

Some components may still not be exposed at the root level except through the global namespace `Component`.

#### Changes:
* Globally exposed component renamed `Facebook` -> `FacebookPost` to match Apple's spec
* Updated URI validation method. Now wraps around native URL class and checks against a list of valid file extensions - these may need updating. Couldn't find a canonical list of all valid file types
* Added `ColorSchema` interface.
* Removed unsupported advertisement classes: `MediumRectangleAdvertisement` and `BannerAdvertisment`
* Add missing fields to several A/V components
* Other minor housecleaning changes
