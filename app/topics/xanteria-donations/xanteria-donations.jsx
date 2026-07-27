import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-donations');
}

export default function XanteriaDonationsKeywordPage() {
  return <StaticKeywordPage slug="xanteria-donations" />;
}
