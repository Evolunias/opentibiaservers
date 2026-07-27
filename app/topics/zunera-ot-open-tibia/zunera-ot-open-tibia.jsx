import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-open-tibia');
}

export default function ZuneraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-open-tibia" />;
}
