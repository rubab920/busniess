import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
  ];

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      // Handle booking logic here
      alert(`Booking confirmed for ${selectedDate.toDateString()} at ${selectedTime}`);
    }
  };

  return (
    <section id="booking" className="py-20 bg-brand-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Book a Free Strategy Session
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Schedule a complimentary 60-minute consultation to discuss your marketing goals and create a customized strategy for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar Selection */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2 text-primary" />
                Select a Date
              </CardTitle>
              <CardDescription>
                Choose your preferred date for the strategy session
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                className={cn("rounded-md border p-3 pointer-events-auto")}
              />
            </CardContent>
          </Card>

          {/* Time Selection */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                Select a Time
              </CardTitle>
              <CardDescription>
                Available time slots (Eastern Time)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2 max-h-80 overflow-y-auto">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "p-3 rounded-md text-sm font-medium transition-all",
                      selectedTime === time
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
              
              {/* Booking Summary */}
              {selectedDate && selectedTime && (
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Booking Summary</h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    <strong>Date:</strong> {selectedDate.toDateString()}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Time:</strong> {selectedTime} (Eastern Time)
                  </p>
                  <Button 
                    onClick={handleBooking}
                    variant="brand" 
                    className="w-full"
                  >
                    Confirm Booking
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-3">What to Expect</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-white/90">
              <div>
                <strong>Current Analysis</strong>
                <p>Review of your existing marketing efforts</p>
              </div>
              <div>
                <strong>Strategy Development</strong>
                <p>Custom recommendations for growth</p>
              </div>
              <div>
                <strong>Next Steps</strong>
                <p>Clear action plan and proposal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;