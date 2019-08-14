# <img src="icon.png" width="24"/> **mySkip**

Extension for automatically skipping video ads and closing banner ads on YouTube.

## Functioning

The main idea of this extension is taken from [andykawabata's YouTube Ad Skipper](https://github.com/andykawabata/youtube_ad_skipper). He discovered that you can skip a YouTube add without waiting 5 seconds by using JavaScript `.click()`.

So basically my script uses an observer to detect any change on the YouTube page (including that way both new ads and video changes) and try to click the *skip* or *close* button.

## Download

You can download this extension for [Chrome](), [Firefox]() and [Opera]() from their addon stores.

<img src="banner.png" width="75%"/>