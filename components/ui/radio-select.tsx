// "use client"
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface OptionType {
	value: string;
	label: string;
	description: string;
}

interface RadioSelectProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
	options: OptionType[];
	label: string;
	name: string;
	defaultValue?: string;
	className?: string;
	onValueChange?: (value: string) => void;
}

const RadioSelect = React.forwardRef<HTMLDivElement, RadioSelectProps>(
	({ options, label, name, defaultValue, className, onValueChange, ...props }, ref) => {
		const [selectedValue, setSelectedValue] = React.useState<string>(defaultValue || options[0].value);

		React.useEffect(() => {
			if (onValueChange) {
				onValueChange(selectedValue);
			}
		}, [selectedValue, onValueChange]);

		return (
			<div className={cn("flex flex-col gap-4", className)}>
				<label className="text-base font-semibold leading-6 text-gray-900" htmlFor={name}>
					{label}
				</label>
				<RadioGroupPrimitive.Root
					className="flex border rounded-lg border-grey-200"
					value={selectedValue}
					onValueChange={setSelectedValue}
					aria-label={label}
					name={name}
					id={name}
					ref={ref}
					{...props}>
					{options.map((option, index) => (
						<div className="flex flex-1" key={index}>
							<RadioGroupPrimitive.Item
								className={`relative  cursor-pointer  flex flex-1 p-4 ${index === 0 ? "rounded-l-lg" : ""} ${
									index === options.length - 1 ? "rounded-r-lg" : ""
								} outline-none cursor-default min-h-20 ${selectedValue === option.value ? "bg-black" : ""}`}
								value={option.value}
								id={`r${index}`}>
								<RadioGroupPrimitive.Indicator className="absolute right-0 mr-2 top-0 mt-2 flex items-center justify-center h-[40px] w-[40px] after:content-[''] after:block after:w-[25px] after:h-[25px] after:rounded-[50%] after:bg-white">
									<Check size={15} color="black" className="absolute"></Check>
								</RadioGroupPrimitive.Indicator>
								<label
									className={`flex flex-col flex-1 gap-2 cursor-pointer text-base font-semibold leading-6 text-left ${
										selectedValue === option.value ? "text-white" : "text-gray-900"
									}`}
									htmlFor={`r${index}`}
									aria-label={option.label}>
									{option.label}
									<p className="text-sm text-left text-gray-500">{option.description}</p>
								</label>
							</RadioGroupPrimitive.Item>
						</div>
					))}
				</RadioGroupPrimitive.Root>
			</div>
		);
	}
);

RadioSelect.displayName = "RadioSelect";

export { RadioSelect };
