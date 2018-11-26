# Ticketmaster API Script

Index.js is a stub of a script that gets data from the Tickermaster API. It currently prints concert data
for all of the Queen events on Ticketmaster. 


# To Install

* Install Node.js: https://nodejs.org/en/download/
* I have no idea how command line stuff works on Windows, you'll have to learn it. 
* Navigate to this directory, then install node_modules with ```npm install```
* Run this to start the script: ``` node index.js```
* Learn more about the API and how to extend it here: https://developer.ticketmaster.com/api-explorer/. 
* In order to do an API request, you need API keys. Create a .env file in this repo and fill it with your key: 
```
	CONSUMER_KEY=
```

* This is the some of data that hitting this particular endpoint gets you:

```
      "type" : "event"
    }, {
      "name" : "A Drag Queen Christmas -The Naughty Tour",
      "locale" : "en-us",
      "eventUrl" : "http://concerts.livenation.com/event/0200551E949A92AD",
      "promoterId" : [ 653 ],
      "dates" : {
        "start" : {
          "dateTime" : "2018-11-28T01:00:00.000+0000",
          "localDate" : "2018-11-27",
          "localTime" : "20:00:00"
        },
        "end" : {
          "dateTime" : "2018-11-28T01:00:00.000+0000",
          "localDate" : "2018-11-27",
          "localTime" : "20:00:00"
        },
        "timezone" : "America/New_York",
        "displayOptions" : {
          "range" : {
            "localStartDate" : "2018-11-27",
            "localEndDate" : "2018-11-27"
          }
        },
        "status" : {
          "code" : "active"
        }
      },
      "test" : false,
      "_links" : {
        "self" : {
          "href" : "/discovery/v1/events/0200551E949A92AD?locale=en-us&domain=ticketmaster.com"
        },
        "categories" : [ {
          "href" : "/discovery/v1/categories/10002?locale=en-us&domain=ticketmaster.com"
        }, {
          "href" : "/discovery/v1/categories/53?locale=en-us&domain=ticketmaster.com"
        } ],
        "attractions" : {
          "href" : "/discovery/v1/attractions/2301859?locale=en-us&domain=ticketmaster.com"
        },
        "venue" : {
          "href" : "/discovery/v1/venues/17012?locale=en-us&domain=ticketmaster.com"
        }
      },
      "id" : "0200551E949A92AD",
      "_embedded" : {
        "venue" : [ {
          "name" : "The Fillmore Philadelphia presented by Cricket Wireless",
          "marketId" : [ 18 ],
          "country" : {
            "countryCode" : "US"
          },
          "state" : {
            "stateCode" : "PA"
          },
          "city" : {
            "name" : "Philadelphia"
          },
          "location" : {
            "latitude" : "39.965803000",
            "longitude" : "-75.134686000"
          },
          "postalCode" : "19123",
          "address" : {
            "line1" : "29 E Allen Street",
            "line2" : "Philadelphia, PA"
          },
          "timeZone" : "America/New_York",
          "_links" : {
            "self" : {
              "href" : "/discovery/v1/venues/17012?locale=en-us&domain=ticketmaster.com"
            }
          },
          "id" : "17012",
          "type" : "venue"
        } ],
        "categories" : [ {
          "name" : "Arts & Theater",
          "level" : 1,
          "_links" : {
            "self" : {
              "href" : "/discovery/v1/categories/10002?locale=en-us&domain=ticketmaster.com"
            }
          },
          "id" : "10002",
          "type" : "category"
        }, {
          "name" : "More Arts and Theater",
          "level" : 2,
          "_links" : {
            "self" : {
              "href" : "/discovery/v1/categories/53?locale=en-us&domain=ticketmaster.com"
            }
          },
          "id" : "53",
          "type" : "category"
        } ],
        "attractions" : [ {
          "url" : "/A-Drag-Queen-Christmas-tickets/artist/2301859",
          "image" : {
            "url" : "/dam/a/64d/fc08538f-475b-459e-bba2-86af92a2264d_845761_EVENT_DETAIL_PAGE_16_9.jpg"
          },
          "name" : "A Drag Queen Christmas",
          "_links" : {
            "self" : {
              "href" : "/discovery/v1/attractions/2301859?locale=en-us&domain=ticketmaster.com"
            }
          },
          "id" : "2301859",
          "type" : "attraction"
        } ]
      }
```

