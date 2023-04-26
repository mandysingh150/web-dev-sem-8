#include <iostream>
using namespace std;
int main()
{
    float tn, tp, fn, fp;
    cout << "Enter value of true positive: ";
    cin >> tp;
    cout << "Enter value of true negative: ";
    cin >> tn;
    cout << "Enter value of false positive: ";
    cin >> fp;
    cout << "Enter value of false negative: ";
    cin >> fn;

    float precision, recall, accuracy, errorRate, fallout, specificity, fmeasure;
    precision = tp / (tp + fp);
    recall = tp / (tp + fn);
    accuracy = (tp + tn) / (tp + tn + fp + fn);
    errorRate = (fp + fn) / (tp + tn + fp + fn);
    fallout = fp / (tn + fp);
    specificity = tn / (tn + fp);
    fmeasure = (2 * precision * recall) / (precision + recall);

    cout << "Following are the performance measures :\n";
    cout << "Precision : " << precision << "\n";
    cout << "Recall : " << recall << "\n";
    cout << "Accuracy : " << accuracy << "\n";
    cout << "Error Rate : " << errorRate << "\n";
    cout << "Fall Out : " << fallout << "\n";
    cout << "Specificity : " << specificity << "\n";
    cout << "F-measure : " << fmeasure << "\n";
}