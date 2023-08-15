// concept of mergesort
//                      2 4 8 7 6 1 3 5
//                         L    |     R
//                  2  4  8  7  |  6  1  3  5
//                   L  |  R         L  |  r
//                2  4  |  8  7   6  1  |  3  5
//               L | R    L | R   L | R   L | R
//               2 | 4    8 | 7   6 | 1   3 | 5
//                 MS       MS      MS      MS
//                2 4      7 8     1 6     3 5
//                     MS               MS
//                  2 4 7 8          1 3 5 6
//                              MS
//                       1 2 3 4 5 6 7 8
