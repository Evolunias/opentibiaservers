import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-1-no-reset-server');
}

export default function ZuneraOt71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-1-no-reset-server" />;
}
