import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-rules');
}

export default function YurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="yurots-rules" />;
}
