```python
import matplotlib.pyplot as plt

def visualize_gender_ratio(gender_ratio):
    # Create a pie chart
    labels = ['Male', 'Female', 'Non-binary']
    sizes = [gender_ratio['male'], gender_ratio['female'], gender_ratio['nonBinary']]
    colors = ['#ff9999','#66b3ff','#99ff99']
    explode = (0.1, 0, 0)  # explode 1st slice

    plt.pie(sizes, explode=explode, labels=labels, colors=colors, autopct='%1.1f%%', startangle=90)
    plt.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
    plt.show()

def update_visualization(updated_ratio):
    visualize_gender_ratio(updated_ratio)
```