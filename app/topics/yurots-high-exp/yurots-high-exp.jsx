import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-high-exp');
}

export default function YurotsHighExpKeywordPage() {
  return <StaticKeywordPage slug="yurots-high-exp" />;
}
