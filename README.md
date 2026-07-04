# LINK — Container-Modul im NC-System

LINK ist ein neutraler Container im NC-System.
Es erzeugt keine eigenen Werte, sondern führt gepackte Abläufe aus,
ähnlich einer EXE-Datei, jedoch vollständig systemintern.

LINK dient als Transport- und Ausführungsmodul für NC-Abläufe.

## Funktion

LINK führt drei Aufgaben aus:

1. Container laden  
2. Container entpacken  
3. Ablauf ausführen  

LINK entscheidet nicht selbst und berechnet nichts.
Es ist ein reines Ausführungsmodul.

## Container-Logik

Ein LINK-Container besteht aus:

- Header (Modul-Info)
- Payload (Ablauf)
- Route (Pipeline-Zuordnung)

LINK führt die Payload aus und leitet Ergebnisse weiter.

## Pipeline-Zuordnung

LINK nutzt zwei feste Ausführungspunkte:

### Pipeline 3
Pipeline 3 ist die Hardware-Ableitungsebene:

- RAM  
- CPU  
- GPU  
- ROM  
- PORT  
- CALL  
- WpiR  

LINK führt Container aus, die Hardware-Abläufe enthalten.

### Pipeline 6
Pipeline 6 ist die erweiterte Ableitungsebene:

- externe Abläufe  
- PORT CONNECT  
- MA³-Ableitungen  
- BENCH-Weiterleitungen  
- komplexe Abläufe  

LINK führt Container aus, die erweiterte Abläufe enthalten.

## Slave-Funktion

LINK arbeitet als Slave:

LINK = {
  load: <container>,
  pipe: <3 oder 6>,
  state: <ausgeführt>
}

LINK erzeugt keine eigenen Werte.
LINK trifft keine eigenen Entscheidungen.
LINK führt nur aus.

## Sicherheit

LINK ist sicher, weil:

- keine eigenen Werte erzeugt werden
- keine eigenen Entscheidungen getroffen werden
- keine Rückführung möglich ist
- keine Rekonstruktion möglich ist
- keine Muster entstehen
- keine Zustände gespeichert werden

LINK ist öffentlich nutzbar, aber nicht angreifbar.

## Ergebnis

LINK ist stabil.
LINK ist neutral.
LINK ist regelkonform.
LINK kann genutzt werden, aber nicht missbraucht werden.

LINK führt Container sauber in Pipeline 3 oder Pipeline 6 aus.

