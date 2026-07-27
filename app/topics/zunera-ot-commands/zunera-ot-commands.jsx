import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-commands');
}

export default function ZuneraOtCommandsKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-commands" />;
}
