import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-rules');
}

export default function XanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="xanteria-rules" />;
}
