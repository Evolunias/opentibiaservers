import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-low-exp-server-brazil');
}

export default function ZuneraOtLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-low-exp-server-brazil" />;
}
