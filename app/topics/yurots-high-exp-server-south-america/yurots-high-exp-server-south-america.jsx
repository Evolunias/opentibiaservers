import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-high-exp-server-south-america');
}

export default function YurotsHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-high-exp-server-south-america" />;
}
