import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-rules');
}

export default function ZuneraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-rules" />;
}
