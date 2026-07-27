import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-9-6-non-pvp-server');
}

export default function ZuneraOt96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-9-6-non-pvp-server" />;
}
