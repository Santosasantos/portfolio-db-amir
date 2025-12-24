import { CertificationForm } from "@/components/certification-form"

export default function NewCertification() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Add Certification</h1>
        <p className="text-muted-foreground mt-1">Add a new certification</p>
      </div>

      <CertificationForm />
    </div>
  )
}
