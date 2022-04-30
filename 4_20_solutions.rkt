;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-intermediate-lambda-reader.ss" "lang")((modname 4_20_solutions) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f () #f)))
;Practice Problems for: Recursion

;QUESTION 1

;only-ones: (listof Numbers) -> Numbers
;Takes a list of numbers and returns the sum of all of the
; ones, ignoring numbers that aren't one.
(define (only-ones lon)
  (cond [(empty? lon)      0]
        [(= 1 (first lon))   (+ 1 (only-ones (rest lon)))]   
        [else                (only-ones (rest lon))]))

(check-expect (only-ones (list 1 2 1 2 0 1 4 5))
              3)

(check-expect (only-ones (list 2 173 92 74 2 4 7 9))
              0)

(check-expect (only-ones (list))
              0)


;QUESTION 2

;exponent: Number Number -> Number
;Takes two numbers, a base and an exponent, and returns
; based raised to the exponent.
(define (exponent base power)
  (cond [(= power 0)      1]
        [else (* base
                 (exponent base
                           (- power 1)))]))

(check-expect (exponent 2 3)
              8)
(check-expect (exponent 2 5)
              32)
(check-expect (exponent 10000 0)
              1)


;QUESTION 3

;find-z; String -> Boolean
;Returns true if a "z" occurs in input string, false otherwise.
; You assume that str has at least one character.
;Hint: string=?, string-length and substring are helpful here
(define (find-z str)
  (cond [(= (string-length str) 0)        false]    
        [else            (or (string=? "z" (substring str 0 1))
                             (find-z (substring str 1)))]))

(check-expect (find-z "hhifhslfhdjsfhz")
              #t)
(check-expect (find-z "ifhflfhufbwfuey")
              #f)

;Sources:
;Several problems originated from ...
;https://www.w3resource.com/c-programming-exercises/recursion/index.php
