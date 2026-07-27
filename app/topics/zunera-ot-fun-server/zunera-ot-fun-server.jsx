import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-fun-server');
}

export default function ZuneraOtFunServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-fun-server" />;
}
