import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-donations');
}

export default function ZezeniaOnlineDonationsKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-donations" />;
}
