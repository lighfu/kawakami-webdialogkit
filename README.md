# kawakami-webdialogkit
A third generation component that allows you to send and receive data between the web and flowcharts without closing the web dialog.

         Web ⇄ Flowchart

--- -- - -- --- --- -- - -- --- --- -- - -- ---

"kawakami" is a showcase that allows Automate web dialogs and flowcharts to communicate with each other, allowing anyone to create their own applications by rewriting HTML and Javascript content.

It is more stable than the previous framework, SweetLink, and does not pollute IndexedDB or the clipboard.The size of the core scripts and the number of blocks in the flowchart have also been greatly reduced, and the communication logic has been simplified.

The use of toybox's netcat has made a big difference compared to the previous version.

## Generations

gen1: data transfer on clipboard
This has been discontinued because on the latest Android, a pop-up now appears when an item is copied to or read from the clipboard.

gen2: data transfer on indexedDB
Since indexedDB is directly deleted or edited, it has the disadvantage of destroying other DBs.

gen3: data transfer on netcat
latest generation.  Significant block count and size reduction.  simple logic.
