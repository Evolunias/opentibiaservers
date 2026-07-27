import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-donations');
}

export default function ZuneraOtDonationsKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-donations" />;
}
