import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-donations');
}

export default function YurotsDonationsKeywordPage() {
  return <StaticKeywordPage slug="yurots-donations" />;
}
