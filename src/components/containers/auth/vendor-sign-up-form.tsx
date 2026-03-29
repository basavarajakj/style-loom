import { useForm } from '@tanstack/react-form';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

interface VendorSignUpFormProps {
  onSuccess: () => void;
}

export default function VendorSignUpForm({}: VendorSignUpFormProps) {
  // const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  // const [step, setStep] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // const form = useForm({
  //   defaultValues: {
  //     name: '',
  //     email: '',
  //     password: '',
  //     confirmPassword: '',
  //     storeName: '',
  //     storeDescription: '',
  //     contactPhone: '',
  //     countryCode: 'IN',
  //     address: '',
  //   },
  //   validators: {
  //     onSubmit: vendorRegisterSchema.parse
  //   }
  // })
  return <div>VendorSignUpForm</div>;
}
