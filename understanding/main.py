from manim import *

class FullBubbleSortScene(Scene):
    def construct(self):
        array = [5, 2, 9, 1]
        
        # Show title
        title = Text("Bubble Sort Dry Run", font_size=44).to_edge(UP)
        self.play(Write(title))
        
        # Create visual array
        squares = VGroup(*[Square(1.2, color=BLUE).set_fill(BLUE_E, opacity=0.5) for _ in array])
        numbers = VGroup(*[Text(str(num), font_size=36) for num in array])

        for i, square in enumerate(squares):
            square.move_to(LEFT * 2.5 + RIGHT * i * 1.5)
            numbers[i].move_to(square)

        self.play(Create(squares), Write(numbers))
        self.wait(1)

        n = len(array)
        for i in range(n):
            for j in range(n - i - 1):
                # Arrow + Compare label
                arrow = Arrow(numbers[j].get_top() + UP * 0.1, numbers[j + 1].get_top() + UP * 0.1, buff=0.2, color=YELLOW)
                label = Text(f"Compare {numbers[j].text} and {numbers[j+1].text}", font_size=24).next_to(arrow, UP)
                self.play(Create(arrow), Write(label))
                self.wait(0.5)

                if int(numbers[j].text) > int(numbers[j + 1].text):
                    # Swap the number positions
                    self.play(
                        numbers[j].animate.move_to(squares[j + 1]),
                        numbers[j + 1].animate.move_to(squares[j]),
                    )
                    numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]  # update reference
                self.wait(0.3)
                self.play(FadeOut(arrow), FadeOut(label))

            # Mark sorted
            self.play(squares[n - i - 1].animate.set_fill(GREEN, opacity=0.5))
            self.wait(0.2)

        # Final mark for remaining element
        self.play(squares[0].animate.set_fill(GREEN, opacity=0.5))
        self.wait(1)

        # Done
        done = Text("Sorted!", font_size=36).next_to(numbers, DOWN)
        self.play(Write(done))
        self.wait(2)
