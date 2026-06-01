"use client";

import { useState, type FormEvent } from "react";
import { copy } from "@/lib/copy";
import {
  salesChannelIds,
  supplyChainCategoryIds,
  supplyChainServiceIds,
  type SalesChannelId,
  type SupplyChainCategoryId,
  type SupplyChainServiceId,
} from "@/lib/services";
import { Button } from "@/components/ui/Button";

type QuoteFormProps = {
  embedded?: boolean;
};

export function QuoteForm({ embedded = false }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState<
    SupplyChainServiceId[]
  >([]);
  const [selectedChannels, setSelectedChannels] = useState<SalesChannelId[]>(
    [],
  );
  const [formError, setFormError] = useState("");

  function toggleService(id: SupplyChainServiceId) {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  }

  function toggleChannel(id: SalesChannelId) {
    setSelectedChannels((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");

    if (selectedServices.length === 0) {
      setFormError(copy.form.selectAtLeastOne);
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center ${
          embedded ? "" : "shadow-card"
        }`}
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-semibold text-emerald-900">
          {copy.quote.success}
        </h3>
        <p className="mt-2 text-emerald-700">{copy.quote.successDetail}</p>
        <Button
          className="mt-6"
          variant="secondary"
          onClick={() => {
            setSubmitted(false);
            setSelectedServices([]);
            setSelectedChannels([]);
          }}
        >
          {copy.cta.submitQuote}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 ${
        embedded ? "" : "shadow-card"
      }`}
    >
      {!embedded && (
        <ul className="mb-8 flex flex-col gap-2 rounded-xl bg-brand-50 p-4 sm:flex-row sm:flex-wrap sm:gap-x-6">
          {copy.quote.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-2 text-sm font-medium text-brand-800"
            >
              <span className="text-brand-600" aria-hidden>
                ✓
              </span>
              {benefit}
            </li>
          ))}
        </ul>
      )}

      <FormSection title={copy.form.sectionContact}>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label={copy.form.name} required>
            <input name="name" required className={inputClass} />
          </Field>
          <Field label={copy.form.company} required>
            <input name="company" required className={inputClass} />
          </Field>
          <Field label={copy.form.role}>
            <input
              name="role"
              className={inputClass}
              placeholder={copy.form.placeholderRole}
            />
          </Field>
          <Field label={copy.form.preferredContact} required>
            <select name="preferredContact" required className={inputClass} defaultValue="">
              <option value="" disabled>
                {copy.form.selectPreferred}
              </option>
              <option value="email">{copy.form.contactEmail}</option>
              <option value="phone">{copy.form.contactPhone}</option>
            </select>
          </Field>
          <Field label={copy.form.email} required>
            <input name="email" type="email" required className={inputClass} />
          </Field>
          <Field label={copy.form.phone} required>
            <input name="phone" required className={inputClass} />
          </Field>
        </div>
      </FormSection>

      <FormSection title={copy.form.sectionBusiness}>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label={copy.form.businessType} required>
            <select name="businessType" required className={inputClass} defaultValue="">
              <option value="" disabled>
                {copy.form.selectBusinessType}
              </option>
              <option value="amazon">{copy.form.businessAmazon}</option>
              <option value="brand">{copy.form.businessBrand}</option>
              <option value="factory">{copy.form.businessFactory}</option>
              <option value="wholesale">{copy.form.businessWholesale}</option>
              <option value="switching">{copy.form.business3pl}</option>
              <option value="other">{copy.form.businessOther}</option>
            </select>
          </Field>
          <Field label={copy.form.productCategory} required>
            <select name="productCategory" required className={inputClass} defaultValue="">
              <option value="" disabled>
                {copy.form.selectCategory}
              </option>
              <option value="general">{copy.form.categoryGeneral}</option>
              <option value="apparel">{copy.form.categoryApparel}</option>
              <option value="electronics">{copy.form.categoryElectronics}</option>
              <option value="home">{copy.form.categoryHome}</option>
              <option value="beauty">{copy.form.categoryBeauty}</option>
              <option value="other">{copy.form.categoryOther}</option>
            </select>
          </Field>
          <Field label={copy.form.monthlyContainers} required>
            <select name="monthlyContainers" required className={inputClass} defaultValue="">
              <option value="" disabled>
                {copy.form.selectContainers}
              </option>
              <option value="none">{copy.form.containersNone}</option>
              <option value="1-5">{copy.form.containers1to5}</option>
              <option value="6-15">{copy.form.containers6to15}</option>
              <option value="15+">{copy.form.containers15plus}</option>
            </select>
          </Field>
          <Field label={copy.form.monthlyOrders} required>
            <select name="monthlyOrders" required className={inputClass} defaultValue="">
              <option value="" disabled>
                {copy.form.selectOrders}
              </option>
              <option value="low">{copy.form.ordersLow}</option>
              <option value="mid">{copy.form.ordersMid}</option>
              <option value="high">{copy.form.ordersHigh}</option>
              <option value="enterprise">{copy.form.ordersEnterprise}</option>
            </select>
          </Field>
          <Field label={copy.form.skuCount} required>
            <select name="skuCount" required className={inputClass} defaultValue="">
              <option value="" disabled>
                {copy.form.selectSkus}
              </option>
              <option value="low">{copy.form.skusLow}</option>
              <option value="mid">{copy.form.skusMid}</option>
              <option value="high">{copy.form.skusHigh}</option>
              <option value="enterprise">{copy.form.skusEnterprise}</option>
            </select>
          </Field>
        </div>

        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-slate-700">
            {copy.form.salesChannels}
          </legend>
          <p className="mt-1 text-xs text-slate-500">{copy.form.salesChannelsHint}</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {salesChannelIds.map((id) => (
              <CheckboxOption
                key={id}
                id={`channel-${id}`}
                label={copy.form.channels[id]}
                checked={selectedChannels.includes(id)}
                onChange={() => toggleChannel(id)}
              />
            ))}
          </div>
        </fieldset>
      </FormSection>

      <FormSection title={copy.form.sectionServices}>
        <p className="mb-6 text-sm text-slate-600">
          {copy.form.servicesNeeded}
          <span className="ml-1 text-brand-600">*</span>
        </p>
        <div className="space-y-8">
          {supplyChainCategoryIds.map((categoryId: SupplyChainCategoryId) => (
            <fieldset key={categoryId}>
              <legend className="text-sm font-semibold text-slate-900">
                {copy.supplyChain.categories[categoryId].title}
              </legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {supplyChainServiceIds[categoryId].map((id) => (
                  <CheckboxOption
                    key={id}
                    id={`service-${id}`}
                    label={copy.supplyChain.services[id].title}
                    checked={selectedServices.includes(id)}
                    onChange={() => toggleService(id)}
                  />
                ))}
              </div>
            </fieldset>
          ))}
        </div>
        {selectedServices.map((id) => (
          <input key={id} type="hidden" name="services" value={id} />
        ))}
        {selectedChannels.map((id) => (
          <input key={id} type="hidden" name="channels" value={id} />
        ))}
      </FormSection>

      <FormSection title={copy.form.sectionDetails}>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label={copy.form.startTimeline} required>
            <select name="startTimeline" required className={inputClass} defaultValue="">
              <option value="" disabled>
                {copy.form.selectTimeline}
              </option>
              <option value="asap">{copy.form.timelineAsap}</option>
              <option value="month">{copy.form.timelineMonth}</option>
              <option value="quarter">{copy.form.timelineQuarter}</option>
              <option value="exploring">{copy.form.timelineExploring}</option>
            </select>
          </Field>
          <Field label={copy.form.currentSituation} required>
            <select name="currentSituation" required className={inputClass} defaultValue="">
              <option value="" disabled>
                {copy.form.selectSituation}
              </option>
              <option value="new">{copy.form.situationNew}</option>
              <option value="switch">{copy.form.situationSwitch}</option>
              <option value="expand">{copy.form.situationExpand}</option>
              <option value="partial">{copy.form.situationPartial}</option>
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field label={copy.form.specialRequirements}>
              <input
                name="specialRequirements"
                className={inputClass}
                placeholder={copy.form.placeholderSpecial}
              />
            </Field>
          </div>
          <div className="sm:col-span-2">
            <Field label={copy.form.message} required>
              <textarea
                name="message"
                required
                rows={5}
                className={inputClass}
                placeholder={copy.form.placeholderMessage}
              />
            </Field>
          </div>
        </div>
      </FormSection>

      {formError && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">
          {formError}
        </p>
      )}

      <div className="mt-8 border-t border-slate-200 pt-6">
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={loading}
        >
          {loading ? "..." : copy.cta.submitQuote}
        </Button>
        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          {copy.form.privacyNote}
        </p>
      </div>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

function FormSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-slate-200 pt-8 first:border-t-0 first:pt-0">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">
        {label}
        {required && <span className="ml-1 text-brand-600">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function CheckboxOption({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition ${
        checked
          ? "border-brand-500 bg-brand-50 text-brand-900"
          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
      }`}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
      />
      <span className="font-medium">{label}</span>
    </label>
  );
}
