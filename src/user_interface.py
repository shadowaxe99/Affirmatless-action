```python
import tkinter as tk
from src.data_analysis import calculateGenderRatio
from src.real_time_update import updateGenderRatio
from src.data_visualization import visualizeGenderRatio

class UserInterface:
    def __init__(self):
        self.window = tk.Tk()
        self.window.title("Partiful Gender Ratio Analysis")

        self.rsvpListContainer = tk.Frame(self.window)
        self.genderRatioChart = tk.Frame(self.window)
        self.realTimeUpdateContainer = tk.Frame(self.window)

        self.rsvpListContainer.pack()
        self.genderRatioChart.pack()
        self.realTimeUpdateContainer.pack()

    def renderRSVPList(self, rsvpList):
        for rsvp in rsvpList:
            tk.Label(self.rsvpListContainer, text=str(rsvp)).pack()

    def renderGenderRatioChart(self, genderRatio):
        chart = visualizeGenderRatio(genderRatio)
        chart.pack(in_=self.genderRatioChart)

    def renderRealTimeUpdates(self, updatedRatio):
        tk.Label(self.realTimeUpdateContainer, text=str(updatedRatio)).pack()

    def run(self):
        self.window.mainloop()

def main():
    ui = UserInterface()

    rsvpList = importRSVPList()
    ui.renderRSVPList(rsvpList)

    genderRatio = calculateGenderRatio(rsvpList)
    ui.renderGenderRatioChart(genderRatio)

    updatedRatio = updateGenderRatio(rsvpList)
    ui.renderRealTimeUpdates(updatedRatio)

    ui.run()

if __name__ == "__main__":
    main()
```