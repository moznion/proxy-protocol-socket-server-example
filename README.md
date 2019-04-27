proxy-protocol-socket-server-example
==

An example implementation for PROXY protocol aware socket server.

How to build
--

```
$ npm run build
```

How to run
--

```
$ npm start
```

Tips
--

### Launch the final destination of proxying

```sh
$ while : ; do   echo -ne "HTTP/1.0 200 OK\n\nHello World\n" | nc -l 5963; done
```

Author
--

moznion (<moznion@gmail.com>)

License
--

NYSL

```
A. This software is "Everyone'sWare". It means:
  Anybody who has this software can use it as if he/she is
  the author.

  A-1. Freeware. No fee is required.
  A-2. You can freely redistribute this software.
  A-3. You can freely modify this software. And the source
      may be used in any software with no limitation.
  A-4. When you release a modified version to public, you
      must publish it with your name.

B. The author is not responsible for any kind of damages or loss
  while using or misusing this software, which is distributed
  "AS IS". No warranty of any kind is expressed or implied.
  You use AT YOUR OWN RISK.

C. Copyrighted to moznion <moznion@gmail.com> <moznion.net>

D. Above three clauses are applied both to source and binary
  form of this software.
```

