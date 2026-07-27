import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-ots');
}

export default function ZuneraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-ots" />;
}
